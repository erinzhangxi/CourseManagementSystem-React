const LESSON_API_URL =
  'http://localhost:8080/api/course/CID/module/MID/lesson/';
  const DELETE_LESSON_API =
  'http://localhost:8080/api/lesson/'


let _singleton = Symbol();
export default class ModuleService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_API_URL.replace('CID', courseId)
                                .replace('MID', moduleId),
      {
        body: JSON.stringify(lesson),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }


    deleteLesson(lessonId) {
      return fetch(DELETE_LESSON_API + lessonId, {
        method: 'DELETE'
      }).then(function (response) {
        return response;
      })}

      findAllLessons() {
        return fetch(
          DELETE_LESSON_API
        ).then(function (response) {
            return response.json();
          })
      }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(
      LESSON_API_URL
        .replace('CID', courseId)
        .replace('MID', moduleId))
      .then(function (response) {
        return response.json();
      })
  }


  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new ModuleService(_singleton);
    return this[_singleton]
  }
}

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
      {
          title: true,
          name: 'Student',
          wrapper: {            // optional wrapper object
              element: '',        // required valid HTML5 element tag
              attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          },
          class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
          name: 'Courses',
          url: '/courses',
          icon: 'icon-drop',
      },
      {
          name: 'Modules',
          url: '#',
          icon: 'icon-pencil',
      },
      {
          name: 'Lessons',
          url: '#',
          icon: 'icon-puzzle',
      },
      {
          name: 'Topics',
          url: '#',
          icon: 'icon-cursor',
      },
      {
          name: 'Widgets',
          url: '#',
          icon: 'icon-bell',
      },
      {
          title: true,
          name: 'Admin',
          wrapper: {
              element: '',
              attributes: {}
          },
      },
  ]
};

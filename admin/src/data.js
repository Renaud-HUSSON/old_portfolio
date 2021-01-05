const data = {
  projets: {
    url: "/api/projets",
    create: true,
    update: true,
    data: {
      id: '',
      name: '',
      description: '',
      tech: '',
      link: '',
      github: '',
      image: ''
    },
    image: true
  },
  competences: {
    url: "/api/competences",
    create: true,
    update: true,
    data: {
      id: '',
      name: '',
      type: '',
      image: ''
    },
    image: true
  },
  parcours: {
    url: "/api/parcours",
    create: true,
    update: true,
    data: {
      id: '',
      date: '',
      name: ''
    }
  },
  experiences: {
    url: "/api/experiences",
    create: true,
    update: true,
    data: {
      id: '',
      date: '',
      name: ''
    }
  },
  messages: {
    url: "/api/messages",
    create: false,
    update: false,
    data: {
      id: '',
      username: '',
      email: '',
      message: ''
    }
  }
}

export default data
const data = {
  projets: {
    url: "/api/projets",
    create: true,
    update: true,
    single: 'id',
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
    single: 'id',
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
    single: 'id',
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
    single: 'id',
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
    single: 'id',
    data: {
      id: '',
      username: '',
      email: '',
      message: ''
    }
  },
  endpoints: {
    url: "/api/endpoints",
    create: true,
    update: false,
    single: 'id',
    data: {
      id: '',
      chemin: ''
    }
  },
  roles: {
    url: "/api/roles",
    create: true,
    update: false,
    single: 'nom',
    data: {
      nom: ''
    }
  },
  methods: {
    url: "/api/methods",
    create: true,
    update: false,
    single: 'nom',
    data: {
      nom: ''
    }
  },
  perms: {
    url: "/api/perms",
    create: true,
    update: true,
    single: 'id',
    data: {
      id: '',
      endpoints: '',
      methods: '',
      roles: ''
    }
  }
}

export default data
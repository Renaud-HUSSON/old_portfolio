export const fadeIn = {
  hidden: {

  },
  visible: {

  },
  exit: {

  }
}

export const slideInFromTop = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 100
  }
}

export const slideInFromBottom = {
  hidden: {
    top: 100
  },
  visible: {
    top: 0
  },
  exit: {

  }
}
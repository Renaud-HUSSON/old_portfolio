export const fadeIn = (duration=0.7, delay=0) => {
  return {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay
      }
    },
    exit: {
      opacity: 0
    }
  }
}

export const slideInFromTop = (duration=0.5, delay=0, value=100) => {
  return {
    hidden: {
      opacity: 0,
      y: -value
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -value,
      transition: {
        when: 'afterChildren'
      }
    },
  }
}

export const slideInFromBottom = (duration=0.5, delay=0, value=100) => {
  return {
    hidden: {
      opacity: 0,
      y: value
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: value,
      transition: {
        when: 'afterChildren'
      }
    }
  }
}

export const slideInFromLeft = (duration=0.5, delay=0, value=100) => {
  return {
    hidden: {
      opacity: 0,
      x: -value
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        delay: delay
      }
    },
    exit: {
      opacity: 0,
      x: -value,
      transition: {
        when: 'afterChildren'
      }
    }
  }
}

export const slideInFromRight = (duration=0.5, delay=0, value=100) => {
  return {
    hidden: {
      opacity: 0,
      x: value,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      x: value,
      transition: {
        when: 'afterChildren',
        ease: "easeInOut",
        duration: duration,
        delay: window.innerWidth <= 768 ? 0.125 : 0
      }
    }
  }
}

export const exitLeft = (duration=0.5) => {
  return {
    exit: {
      x: -window.innerWidth,
      opacity: 0,
      
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: window.innerWidth <= 768 ? 0.125 : 0
      }
    }
  }
}

export const exitRight = (duration=0.5) => {
  return {
    exit: {
      x: window.innerWidth,
      opacity: 0,
      
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: window.innerWidth <= 768 ? 0.125 : 0
      }
    }
  }
}

export const exitBottom = (duration=0.5) => {
  return {
    exit: {
      y: window.innerHeight,
      opacity: 0,
      
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: window.innerWidth <= 768 ? 0.125 : 0
      }
    }
  }
}

export const exitTop = (duration=0.5) => {
  return {
    exit: {
      y: -window.innerHeight,
      opacity: 0,
      
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: window.innerWidth <= 768 ? 0.125 : 0
      }
    }
  }
}

export const scaleIn = (duration=0.5) => {
  return {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {
        duration: duration
      }
    },
    exit: {
      scale: 0
    }
  }
}
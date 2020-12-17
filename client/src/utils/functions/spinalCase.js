const spinalCase = (chaine) => {
  const regex = /[^\w\d]+/ig

  return chaine.toLowerCase().split(regex).join('-').replace(/^(-)(.+)(-)$/, "$2")
}

export default spinalCase
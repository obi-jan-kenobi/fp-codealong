compose = (...fns) => result => {
  const list = fns.slice()
  while (list.length > 0) {
    result = list.pop()(result)
  }
  return result
}

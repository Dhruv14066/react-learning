export const githubinfoloader = async() => {
  const res =  await fetch('https://api.github.com/users/Dhruv14066')
  return res.json()
}
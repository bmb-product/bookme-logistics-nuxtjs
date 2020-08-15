export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log('On request Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    console.log('On Response', response)
  })

  $axios.onError((error) => {
    console.log('On Error', error)
    console.dir(error)
    const code = parseInt(error.response && error.response.status)

    // if (code === 400) {
    //   redirect('/400')
    // }
  })
}

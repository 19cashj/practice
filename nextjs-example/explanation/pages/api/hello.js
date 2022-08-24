// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Next JS allows you to have an api live in the api folder, go to api/hello for this example

// So you can potentially have local JSON files being retrieved and manipulated inside the website itself

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

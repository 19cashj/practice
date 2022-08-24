import posts from '../../posts.json'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json({ posts })
        break
        case 'POST':
        //...
        break
        default:
        res.status(405).end() //Method Not Allowed
        break
    }
}

// This is how you would handle different HTTP requests with a switch

// We also have access to cookies with req.cookies
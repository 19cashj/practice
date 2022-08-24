export default function handler(req, res) {
    res.status(200).json({ post: req.query.id })
} 

//query id also works with api
export default async(req, res) => { 
    const techs = [
        {
            "name": "JavaScript",
            "icon": "/static/Javascript_icon.png"
        }
    ]
    res.status(200).json(techs)
}

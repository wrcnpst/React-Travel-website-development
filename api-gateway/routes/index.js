const express = require('express') 
const app = express();
const router = express.Router()
const axios = require('axios')
const cors = require('cors');
app.use(cors());

router.get('/trips/', (req, res) => {
    let uri = `http://localhost:9000/trips`;

    axios.get(uri).then((response) => {
        var data = response.data
        res.send(data)
    })
    .catch(error => {
        console.log(error);
    })
})

router.get('/trips/:keywords', (req, res) => {
    let keyword = req.params.keywords;
    let uri = `http://localhost:9000/trips?keyword=${keyword}`;
    let encoded = encodeURI(uri);

    axios.get(encoded).then((response) => {
        var data = response.data
        res.send(search(data,keyword))
    })
    .catch(error => {
        console.log(error);
    })
})

function search(data, searchText){
    return data.filter((content) => {
        return content.title.includes(searchText) ||
        content.description.includes(searchText) ||
        content.tags.includes(searchText)
    })
}

module.exports = router
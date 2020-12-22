const express = require('express');
const router = express.Router()
const { requestAPI } = require('../utils');

router.get('/gallery', async (req,res)=> {
  let nameAPI ='/api/v2/home';
  let param = 'page=1';

  try {
    let response = await requestAPI(nameAPI,{page:1},param)
    console.log(response)
    if( response.err !== 0 ){
      return res.status(400).json(response.msg)
    }

    return res.status(200).json(response.data)
  } catch (error) {
        console.log(error)
        res.status(400).json(error);
  }
})

router.get('/playlist', async (req,res)=> {
  let nameAPI ='/api/v2/home';
  let param = 'page=2';

  try {
    let response = await requestAPI(nameAPI,{page:2},param)
    console.log(response)
    if( response.err !==0 ){
      return res.status(400).json(response.msg)
    }

    return res.status(200).json(response.data)
  } catch (error) {
        console.log(error)
        res.status(400).json(error);
  }
})

module.exports = router;

const express = require('express');
const router = express.Router()
const { requestAPI } = require('../utils');
var _ = require('lodash');

router.get('/gallery', async (req,res)=> {
  const { page } = req.query
  let nameAPI ='/api/v2/home';
  let param = `page=${page}`;

  try {
    let response = await requestAPI(nameAPI,{page:page},param)
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
  const { page } = req.query

  let nameAPI ='/api/v2/home';
  let param = `page=${page}`;

  try {
    let response = await requestAPI(nameAPI,{page:page},param)
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

router.get('/song/playlist', async (req,res)=> {
    const {type, count, start, encodeId} = req.query

    let nameAPI = '/api/v2/song/getList';
    let param  = `id=${encodeId}type=${type}`
    let paramCount = `count=${count}`
    try {
      let response = await requestAPI(nameAPI,{type: type,id: encodeId,start: start,count: count},param,paramCount)
      
      if( response.err !==0 ){
        return res.status(400).json(response.msg)
      }
  
      return res.status(200).json(response.data)
    } catch (error) {
          console.log(error)
          res.status(400).json(error);
    }
})


router.get('/song', async (req,res) => {

  const { encodeId } = req.query;  
  let nameAPI = '/api/v2/song/getStreaming';
  let param = `id=${encodeId}`

  try {
    let response = await requestAPI(nameAPI,{id: encodeId},param)
    
    if( response.err !==0 ){
      return res.status(400).json(response.msg)
    }

    return res.status(200).json(response.data)
  } catch (error) {
        console.log(error)
        res.status(400).json(error);
  }
})

router.get('/song/suggested', async (req,res) => {
  const {  start, encodeId} = req.query
  let nameAPI = '/api/v2/recommend/getSongs';
  let param = `id=${encodeId}`
  let paramCount = `count=${20}`
  try {
    let response = await requestAPI(nameAPI,{id: encodeId,start: start,count: 20},param,paramCount)
    let array  = _.sampleSize(response.data.items, 5);
 
    if( response.err !==0 ){
      return res.status(400).json(response.msg)
    }
    return res.status(200).json(array)
  } catch (error) {
        console.log(error)
        res.status(400).json(error);
  }
})
module.exports = router;

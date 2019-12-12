
import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 9065256078390021181a8e85c22daaf8ca105c458fde6d9cb1913b02c4f3fe7c'
    }
})
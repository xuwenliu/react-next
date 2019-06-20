import React, { Component } from 'react';
import axios from 'axios';

class Films extends Component {
    static async getInitialProps() {
        let res = await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3989452', {
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        return {
            films:res.data.data.films
        }
    }
    render() { 
        return (  
            <ul>
                {
                    this.props.films.map(item => {
                        return <li key={item.filmId}>{item.name}
                            <img src={item.poster} />
                        </li>
                    })
                }
                
            </ul>
        );
    }
}
 
export default Films;
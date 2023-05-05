import React from 'react'
import "./css/Navbar.css"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const Table = () => {
    return (

        <div className="box-container2">

            <div className="table">


                <table >
                    <tr>
                        <th>  <div className='checkbox'> <input type="checkbox" /> </div> </th>
                        <th className='Heading'> Rank </th>
                        <th> City </th>
                        <th> Score </th>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>1</div></td>
                        <td> <div className="data">  Nagpur <Link to="/details">  <ArrowOutwardIcon sx={{ fontSize: 15 }} /> </Link> </div> </td>
                        <td> <div className='score'> 68.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   2 </div></td>
                        <td> <div className="data">  Mumbai <Link to="./details" />           <ArrowOutwardIcon sx={{ fontSize: 15 }} />  </div> </td>
                        <td> <div className='score'> 55.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   3 </div></td>
                        <td> <div className="data">  Pune <Link to="/details" /> <ArrowOutwardIcon sx={{ fontSize: 15 }} /> </div> </td>
                        <td> <div className='score'> 88.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   4 </div></td>
                        <td> <div className="data">  Akola <Link to="/details" /> <ArrowOutwardIcon sx={{ fontSize: 15 }} />  </div> </td>
                        <td> <div className='score'> 67.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   5</div></td>
                        <td> <div className="data">  Amravati <a href=""> <ArrowOutwardIcon sx={{ fontSize: 15 }} /> </a> </div> </td>
                        <td> <div className='score'> 55.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   6 </div></td>
                        <td> <div className="data">  Nashil <a href=""> <ArrowOutwardIcon sx={{ fontSize: 15 }} /> </a> </div> </td>
                        <td> <div className='score'> 68.16</div></td>
                    </tr>
                    <tr>
                        <th > <div className='checkbox'> <input type="checkbox" /> </div>  </th>
                        <td > <div className='rank'>   7 </div></td>
                        <td> <div className="data">  Chandrapur <a href=""> <ArrowOutwardIcon sx={{ fontSize: 15 }} /> </a> </div> </td>
                        <td> <div className='score'> 22.16</div></td>
                    </tr>



                </table>



            </div>

        </div>

    )
}

export default Table

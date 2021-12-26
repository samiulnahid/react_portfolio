import React from 'react'
import './testimonial.scss'

const Testimonial = () => {

     const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
 

    return (
        <div className="testimonial" id="testimonial">
            <h1>
                Testimonial
            </h1>
            <div className="container-tm">

                {data.map(d=>( 
                    <div className={d.featured ? "card-tm featured" : "card-tm"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left-top-tm" alt=""/>
                            <img
                                className="user" 
                                src={d.img}
                                alt=""
                            />

                            <img className="right-top-tm" src={d.icom }alt=""/>
                        </div>

                        <div className="center">
                           {d.desc}
                        </div>

                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h5>{d.title}</h5>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonial

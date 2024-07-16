import React from 'react'
import newsFront from './news.css'
import { VscArrowSmallRight } from "react-icons/vsc";

//image
import imgNews1 from '../../Assets/news1.jpg'
import imgNews2 from '../../Assets/news2.jpg'
import imgNews3 from '../../Assets/news3.jpg'
import imgNews4 from '../../Assets/news4.jpg'

const News = [
  {
    id: 1,
    newsImage: imgNews1,
    title: 'Summer Internship Successful',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested'
  },
  {
    id: 2,
    newsImage: imgNews2,
    title: 'Join Our International ...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
  {
    id: 3,
    newsImage: imgNews3,
    title: 'Busy Week for Our OJTs:...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
  {
    id: 4,
    newsImage: imgNews4,
    title: 'We Celebrated the Compl...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
]

const NewsA2K = () => {
  return (

    <section className="blog container section">

      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle" data-aos="fade-right">
            OUR LATEST NEWS
          </h2>
          <p data-aos="fade-left">
            Get in touch with the Latest News of A2K GROUP
          </p>
        </div>

        <div className="mainContainer grid">

          {News.map((item) => {
            return (
                <div className="singleNews" data-aos="fade-up" data-aos-duration="2000">
                  <div className="imgDiv">
                    <img src={item.newsImage} alt={`News ${item.id}`} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {item.title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                      {item.desc}
                    </p>
                  </div>
                  <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">             
                    Read More ➜                 
                  </a>
                </div>
            )
          })}
        </div>

        <button data-aos="zoom-in" className='btnnews'>
            <a href="#">SEE MORE NEWS</a>
          </button>
      </div>
    </section>
  )
}

export default NewsA2K
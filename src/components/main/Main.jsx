import './main.css'
import { Bell, Eye } from 'lucide-react'
import centerImage from '../../assets/center_image.svg'
import squareLogo from '../../../src/assets/logo_sqaure.svg'
import Carousel from '../carousell/Carousell.jsx'
import Card from '../card/Card.jsx'
import { testimonial } from '../../utils/data.js'
import TestimonialRow from '../TestimonailRow.jsx'
function Main() {
    return (
        <div className="main_page">
            <TopSection />
            <CenterSection />
            <Testimonial />
        </div>
    )
}

export default Main

function TopSection() {
    return (
        <div className='top_section'>
            <div className='top_section_left'>
                <Bell />
                <p className='top_section_left_text'>Get notified when a highly correlated whale makes a move</p>
                <p className='top_section_left_desc'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>
            <div className='top_section_right'><Carousel /></div>
        </div>
    )
}

function CenterSection() {
    return (
        <div className="center_section">
            <img src={centerImage} alt="" />
            <div className='center_section_right'>
                <Eye />
                <h2 className='center_section_title'>Watch what the whales are doing</h2>
                <p className='center_section_desc'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
            </div>
        </div>
    )
}

function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='testimonial_head'> Testimonials</div>
            <div className='divider'></div>
            <div className='testimonial_main'>
                {/* <div className='logo'></div> */}
                <img className='square_logo' src={squareLogo} alt="" />
              <TestimonialRow>
                    {testimonial.map((item, index) => (
                       <Card size='large' key={index} review={item.review} name={item.name} designation={item.designation} />
                    ))}
                </TestimonialRow>
            </div>
        </div>
    )
}    
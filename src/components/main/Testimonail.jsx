import TestimonialRow from "../TestimonailRow";
import { testimonial } from '../../utils/data.js'
import squareLogo from '../../assets/logo_sqaure.svg'
import Card from "../card/Card";
function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='testimonial_head'> Testimonials</div>
            <div className='divider'></div>
            <div className='testimonial_main'>
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

export default Testimonial;
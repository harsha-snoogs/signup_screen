import {Bell} from 'lucide-react'
import Carousel from '../carousell/Carousell.jsx'
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
export default TopSection;
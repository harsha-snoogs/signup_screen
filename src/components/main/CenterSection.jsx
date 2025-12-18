import { Eye } from 'lucide-react'
import centerImage from '../../assets/center_image.svg'
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

export default CenterSection;   
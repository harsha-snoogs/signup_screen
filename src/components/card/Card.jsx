import './card.css'
import { Bell } from 'lucide-react'

function Card({ size = "small", review, name, designation, icon, isCheckBox, type }) {

    if (size === 'large') {
        return <div className="card large-card">
            <div className='name_designation'>
                <span className='name'>{name}</span>
                <span className="designation">{designation ?? ""}</span>
            </div>
            <p className='review'>
                {review}
            </p>
        </div>
    } else {
        return <div className=" card small-card">
            <div className='card_header'>
                {icon ? icon : <Bell />}
                {isCheckBox ? <input checked type="checkbox" name="" id="" /> : <span className='saveText'>save</span>}
            </div>
            {buildBottomSectionSmallCard(type)}
        </div>
    }


}

export default Card

function buildBottomSectionSmallCard(type) {
    switch (type) {
        case 'email':
            return (
                <div>
                    <p  style={{paddingBottom: "10px"}} className='card_body_text email_sec_text'>We’ll be sending
                        notifications to you
                        here</p>
                    <input placeholder='xyz@email.com' className="email_input" type="email" name="" id="" />
                </div>
            )
        case 'notify_amount':
            return (
                <div>
                    <p className='card_body_text' style={{paddingBottom: "10px"}}>Notify me when any wallets
                        move more than</p>
                    <select name="amount" id="amount">
                        <option value="1000">$1000</option>
                    </select>
                </div>
            )
        case 'notify_time':
            return (
                <div>
                    <p  style={{paddingBottom: "8px"}} className='card_body_text'>Notify me when any wallet dormant for</p>
                    <select  name="time" id="time">
                        <option value="30">{"> 30 days"}</option>
                    </select>
                    <p style={{paddingTop: "8px"}}  className='card_body_text'>becomes active</p>
                </div>
            )
        default:
            return (
                <div>
                    <p className='card_body_text'>We’ll be sending
                        notifications to you
                        here</p>
                    <input placeholder='xyz@email.com' className="email_input" type="email" name="" id="" />
                </div>
            )
            break;
    }


}
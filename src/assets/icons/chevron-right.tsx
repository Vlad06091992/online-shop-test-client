import {memo} from 'react'

export const SvgComponent = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00002 19L16 12L9.00002 5" stroke='#A3A7BF' strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>


)

export default memo(SvgComponent)




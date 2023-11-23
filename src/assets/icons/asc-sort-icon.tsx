import {memo} from 'react'

type IconProps = {
    isActive?:boolean
}
const SvgComponent = ({isActive}:IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 17.25H3.75M16.25 12H3.75M12 6.75H3.75" stroke={isActive ? '#798FFF' : '#A3A7BF'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

)

export default memo(SvgComponent)




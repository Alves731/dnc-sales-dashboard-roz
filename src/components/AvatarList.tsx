import { StyledH2, StyledSpan } from '@/components'
import { Avatar, Box } from '@mui/material'
import { pxTORem } from '@/utils'
import type { AvatarsListProps } from '@/types'

function AvatarList(props: AvatarsListProps) {
    return (
    <>
        {
            props.listData.map((item, index) => (
                <Box sx={{ display: 'flex', alignItems: 'center', padding: `${pxTORem(12)} 0`, key: index }}>
                    <Box>
                    <Avatar alt={item.name} src={item.avatar} sx={{ width: pxTORem(48), height: pxTORem(48), marginRight: pxTORem(116) }}/>
                    </Box>
                    <Box>
                        <StyledH2>{item.name}</StyledH2>
                        <StyledSpan>{item.subtitle}</StyledSpan>
                    </Box>
                </Box>
            ))
        }
    </>
    )
}

export default AvatarList
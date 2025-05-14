import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                height: '4px',
                borderRadius: '10px',

                '& .MuiSlider-thumb': {
                    color: '#FFFFFF',
                    boxShadow: 'none',
                    border: '1px solid #00CC22',
                    width: '18px',
                    height: '18px',

                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        display: 'block',

                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22',
                        boxShadow: 'none'
                    }
                },

                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                },

                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    color: '#00CC22'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

import React from 'react'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

export const statsData = [
    {
        icon: (<GiEarthAsiaOceania color="#f42ea1"/>),
        title: "Over 100 Courses",
        desc: "Learn over 10 genres of music through 100 unique courses."
    },
    {
        icon: (<MdAirplanemodeActive color="f1c299"/>),
        title: "500+ Students Taught",
        desc: "Over 500 students have received training from our academy."
    },
    {
        icon: (<MdTimer color="b7cca3"/>),
        title: "Fastest Support",
        desc: "Access our support team 24x7"
    },
    {
        icon: (<FaMoneyCheck color="green"/>),
        title: "Free Education",
        desc: "Our courses are free for students."
    }
]
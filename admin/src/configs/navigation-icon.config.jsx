import React from 'react'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineNewspaper,
    HiOutlineShoppingCart,
    HiOutlineOfficeBuilding,
    HiOutlineBriefcase,
    HiOutlineViewGrid,
    HiOutlineCog

} from 'react-icons/hi'

const navigationIcon = {
    home: <HiOutlineHome />,
    singleMenu: <HiOutlineViewGridAdd />,
    collapseMenu: <HiOutlineTemplate />,
    groupSingleMenu: <HiOutlineDesktopComputer />,
    groupCollapseMenu: <HiOutlineColorSwatch />,
    users: <HiOutlineUser />,
    news: <HiOutlineNewspaper />,
    orders: <HiOutlineShoppingCart />,
    organization: <HiOutlineOfficeBuilding />,
    services: <HiOutlineBriefcase />,
    report: <HiOutlineViewGrid />,
    system: <HiOutlineCog />

}

export default navigationIcon
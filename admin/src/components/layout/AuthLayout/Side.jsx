import React, { cloneElement } from 'react'
import { Avatar } from 'components/ui'
import Logo from 'components/template/Logo'
import { APP_NAME } from 'constants/app.constant'

const Side = ({ children, content, ...rest }) => {
	return (
		<div className="grid lg:grid-cols-3 h-full">
			<div
				className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex relative"
				style={{
					backgroundImage: `url('/img/bg-login.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<div className='h-full w-full bg-black/40 absolute inset-0'></div>
				<div className='relative z-10 h-24'>
					<Logo mode="dark" className="h-full" imgClass='h-full w-auto' />
				</div>
				<span className="text-white relative z-10">Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-semibold">{`${APP_NAME}`}</span> </span>
			</div>
			<div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
				<div className="xl:min-w-[450px] px-8">
					<div className="mb-8">
						{content}
					</div>
					{children ? cloneElement(children, { ...rest }) : null}
				</div>
			</div>
		</div>
	)
}

export default Side
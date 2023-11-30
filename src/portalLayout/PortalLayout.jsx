"use client"

// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
import React, { Fragment, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Topbar from '../dashboard/Portal/Topbar';
import Sidebar from '../dashboard/Portal/Sidebar';
import { useEffect } from 'react';
import {SESSION_ADMIN_LOGIN, SESSION_PROVIDER_LOGIN} from "../Utils/Constant";

const PortalLayout = ({ children }) => {

	const [showNav, setShowNav] = useState(true);
	const [isMobile, setIsMobile] = useState(false);
	const [adminLogin, setAdminLogin] = useState(false)
	const [providerLogin, setProviderLogin] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const router = useNavigate()
	const location = useLocation();


	useEffect(() => {
		const isLogin = sessionStorage.getItem(SESSION_ADMIN_LOGIN)
		const isProviderLogin = sessionStorage.getItem(SESSION_PROVIDER_LOGIN)
		if (isLogin === "true"){
			setAdminLogin(true)
			setProviderLogin(false)
		} else if(isProviderLogin === "true") {
			setAdminLogin(false)
			setProviderLogin(true)
		} else if(isProviderLogin !== "true" && location.pathname === "/login"){
			setProviderLogin(false)
			router('/providerLogin')
		} else {
			setAdminLogin(false)
			router('/login')
		}
	}, [adminLogin, providerLogin])

	// const { data: session } = useSession({})

	// useEffect(() => {
	// 	if (session === undefined) {
	// 		setIsLoading(true);
	// 	} else {
	// 		if (session !== null) {
	// 			setLogin(true)
	// 			setIsLoading(false)
	// 		} else {
	// 			setLogin(false)
	// 			router.push('/login')
	// 		}
	// 	}
	// }, [session])

	// function handleSize() {
	// 	if (innerWidth <= 600) {
	// 		setShowNav(false)
	// 		setIsMobile(true)
	// 	} else {
	// 		setShowNav(true)
	// 		setIsMobile(false)
	// 	}
	// }

	// useEffect(() => {
	// 	if (typeof window != undefined) {
	// 		addEventListener("resize", handleSize)
	// 	}
	// 	return () => {
	// 		removeEventListener("resize", handleSize);
	// 	};
	// }, []);

	return (
		<div>
				<div>
					<Topbar showNav={showNav} setShowNav={setShowNav} />
					<Transition
						as={Fragment}
						show={showNav}
						enter="transform transition duration-[400ms]"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transform duration-[400ms] transition ease-in-out"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<Sidebar showNav={showNav} adminLogin={adminLogin} providerLogin={providerLogin} />
					</Transition>

					<main
						className={`bg-white pt-6 transition-all duration-[400ms] ${showNav && !isMobile ? "pl-56" : ""
							}`}>
						<div className="bg-white px-4 md:px-16 min-h-screen max-h-[100%] pb-[4rem] ">{children}</div>
					</main>
				</div>


		</div>
	)
}

export default PortalLayout

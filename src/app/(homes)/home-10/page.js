
'use client';
import ModeChanger from '@/components/homes/ModeChanger'
import HomeNine from '@/components/homes/homepageWrappers/HomeNine'
import React, { useState, useEffect } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useContextElement } from "@/context/Context";
import Link from "next/link";
var data ="test"

export  default function page() {
	const [todos, settodos] = useState([]);

	
	console.log('welcome1')
	const [currentTabOne, setCurrentTabOne] = useState(1);
	const callAPI = async () => {
		console.log('welcome2')
		try {
			const res = await fetch(
				`https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-bmfmp/graphql',
				{
					headers: {
						'apiKey': 'f6fM4NWTQhDloxkrOCDBxKBP31WSiKDaa7BXLsGSlMcvyGeQQxrzlMulQwKaGwY2'
					},
					methods: 'get'
					body: {
						query {
							course {
							  InstructorId
								  _id
								  authorImageSrc
								  category
								  course_description
								  course_end_date
								  course_name
								  course_start_date
								  difficulty
								  duration
								  imageSrc
								  language
								  level
								  paid
								  state
								  subcatergory
								  viewStatus
							}
						  }
					}
				}			`
			);
			 data = await res.json();
			console.log('welcome3')
			console.log(data);
			//settodos(data);

		} catch (err) {
			console.log(err);
		}
	};
  return (
    
	<div onClick={callAPI}> hi hi {data}
	<button
	  className={`tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button`}
	  data-tab-target=".-tab-item-4"
	  type="button"
	>
	 
	  Illustration
	</button>
	<button onClick={callAPI}>Get todos</button>
	console.log({callAPI})
	{todos}
      

  </div>


  )
  }



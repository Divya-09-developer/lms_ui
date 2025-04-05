import React from 'react';

// Data imports (you can place this in a separate file if needed)
const states = [
  { id: 1, title: "Total Sales", value: 10800, new: 50, iconClass: "icon-coupon" },
  { id: 2, title: "Total Courses", value: 3759, new: 40, iconClass: "icon-play-button" },
  { id: 3, title: "Total Students", value: 129786, new: 90, iconClass: "icon-graduate-cap" },
  { id: 4, title: "Total Instructors", value: 22786, new: 290, iconClass: "icon-online-learning" },
];

const coursesData = [
  {
    id: 1,
    imageSrc: "/assets/img/coursesCards/1.png",
    authorImageSrc: "/assets/img/general/avatar-1.png",
    title: "Learn Figma - UI/UX Design Essential Training",
    rating: 4.3,
    ratingCount: 1991,
    lessonCount: 6,
    duration: 320,
    level: "Beginner",
    progress: 20,
    completed: 25,
    originalPrice: 199,
    discountedPrice: 79,
    category: "Design",
    state: "Popular",
    viewStatus: "Good",
    difficulty: "Easy",
    status: "Finished",
  },
  {
    id: 2,
    imageSrc: "/assets/img/coursesCards/2.png",
    authorImageSrc: "/assets/img/general/avatar-1.png",
    title: "Complete Python Bootcamp From Zero to Hero in Python",
    rating: 4.7,
    ratingCount: 1991,
    lessonCount: 6,
    duration: 410,
    level: "Beginner",
    progress: 20,
    completed: 25,
    originalPrice: 189,
    discountedPrice: 89,
    category: "Programming",
    popular: true,
    new: true,
    state: "Fetured",
    viewStatus: "Low",
    difficulty: "Easy",
    status: "Not enrolled",
  },
  {
    id: 3,
    imageSrc: "/assets/img/coursesCards/3.png",
    authorImageSrc: "/assets/img/general/avatar-1.png",
    title: "Angular - The Complete Guide (2022 Edition)",
    rating: 4.5,
    ratingCount: 1991,
    lessonCount: 6,
    duration: 480,
    level: "Beginner",
    progress: 20,
    completed: 25,
    originalPrice: 249,
    discountedPrice: 129,
    category: "Programming",
    state: "Trending",
    viewStatus: "Great",
    difficulty: "Easy",
    status: "Finished",
  },
  {
    id: 4,
    imageSrc: "/assets/img/coursesCards/4.png",
    authorImageSrc: "/assets/img/general/avatar-1.png",
    title: "The Ultimate Drawing Course Beginner to Advanced",
    rating: 4.2,
    ratingCount: 1991,
    lessonCount: 6,
    duration: 370,
    level: "Beginner",
    progress: 20,
    completed: 25,
    originalPrice: 179,
    discountedPrice: 99,
    category: "Art",
    state: "Trending",
    viewStatus: "Good",
    difficulty: "Easy",
    status: "Not enrolled",
  },
  {
    id: 5,
    imageSrc: "/assets/img/coursesCards/5.png",
    authorImageSrc: "/assets/img/general/avatar-1.png",
    title: "Photography Masterclass: A Complete Guide to Photography",
    rating: 3.8,
    ratingCount: 1991,
    lessonCount: 6,
    duration: 250,
    level: "Beginner",
    progress: 20,
    completed: 25,
    originalPrice: 169,
    discountedPrice: 79,
    category: "Photography",
    state: "Popular",
    viewStatus: "Low",
    difficulty: "Meduium",
    status: "Finished",
  },
  {
    id: 6,
    imageSrc: "/assets/img/coursesCards/7.png",
    imageAlt: "image",
    rating: 4.6,
    textRatingCount: 1991,
    courseTitle: "Complete Blender Creator: Learn 3D Modelling for Beginners",
    lessonCount: 6,
    duration: 430,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 209,
    discountedPrice: 99,
    category: "Animation",
    state: "Fetured",
    viewStatus: "Good",
    difficulty: "Meduium",
    status: "Not enrolled",
  },
  {
    id: 7,
    imageSrc: "/assets/img/coursesCards/8.png",
    imageAlt: "image",
    rating: 3.5,
    textRatingCount: 1991,
    courseTitle: "The Complete Financial Analyst Training & Investing Course",
    lessonCount: 6,
    duration: 490,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 299,
    discountedPrice: 149,
    category: "Business",
    state: "Popular",
    viewStatus: "Great",
    difficulty: "Hard",
    status: "Finished",
  },
  {
    id: 8,
    imageSrc: "/assets/img/coursesCards/9.png",
    imageAlt: "image",
    rating: 4.8,
    textRatingCount: 1991,
    courseTitle: "Photography Masterclass: A Complete Guide to Photography",
    lessonCount: 6,
    duration: 500,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 219,
    discountedPrice: 109,
    category: "Photography",
    state: "Fetured",
    viewStatus: "Medium",
    difficulty: "Meduium",
    status: "Not enrolled",
  },
  {
    id: 9,
    imageSrc: "/assets/img/coursesCards/10.png",
    imageAlt: "image",
    rating: 3.9,
    textRatingCount: 1991,
    courseTitle: "Complete Python Bootcamp From Zero to Hero in Python",
    lessonCount: 6,
    duration: 390,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 199,
    discountedPrice: 89,
    category: "Programming",
    state: "Popular",
    viewStatus: "Great",
    difficulty: "Hard",
    status: "Finished",
  },
  {
    id: 10,
    imageSrc: "/assets/img/coursesCards/11.png",
    imageAlt: "image",
    rating: 4.2,
    textRatingCount: 1991,
    courseTitle: "Angular - The Complete Guide (2022 Edition)",
    lessonCount: 6,
    duration: 300,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 189,
    discountedPrice: 99,
    category: "Writing",
    state: "Trending",
    viewStatus: "Medium",
    difficulty: "Meduium",
    status: "Not enrolled",
  },
  {
    id: 11,
    imageSrc: "/assets/img/coursesCards/12.png",
    imageAlt: "image",
    rating: 5.0,
    textRatingCount: 1991,
    courseTitle: "Web Design for Beginners: Real World Coding in HTML & CSS",
    lessonCount: 6,
    duration: 440,
    level: "Beginner",
    progress: 20,
    completed: 25,
    authorImageSrc: "/assets/img/general/avatar-1.png",
    authorName: "Ali Tufan",
    originalPrice: 209,
    discountedPrice: 119,
    category: "Design",
    state: "Popular",
    viewStatus: "Medium",
    difficulty: "Hard",
    status: "Finished",
  },
  // ... (other course objects)
];

const mediaUpload = [
  {
    id: 1,
    imgSrc: "/assets/img/dashboard/media/1.png",
    uploadLabel: "Course thumbnail*",
    uploadPlaceholder: "Cover-1.png",
    description: "Upload your course image here. It must meet our course image quality standards to be accepted.",
  },
  {
    id: 2,
    imgSrc: "/assets/img/dashboard/media/2.png",
    uploadLabel: "Video URL*",
    uploadPlaceholder: "Video-1.mp3",

    description:
      "Enter a valid video URL. Students who watch a well-made promo video are 5X more likely to enroll in your course.",
  },
  
  // ... (other media upload objects)
];

const activeUsers = [
  { id: 1, name: "Cody Fisher", image: "/assets/img/dashboard/online-users/1.png" },
  {
    id: 2,
    name: "Courtney Henry",
    image: "/assets/img/dashboard/online-users/2.png",
  },
  // ... (other active users)
];

const timeline = [
  {
    id: 1,
    image: "/assets/img/dashboard/actions/1.png",
    date: "Monday, 21 October 2024",
    title: "What do you think about course should be completed",
    link1: "Your Road to Better Photography",
    link2: "Add submission",
    time: "17:52",
  },
  {
    id: 2,
    image: "/assets/img/dashboard/actions/2.png",
    date: "Monday, 21 October 2024",
    title: "What do you think about course should be completed",
    link1: "Your Road to Better Photography",
    link2: "Add submission",
    time: "17:52",
  },
  // ... (other timeline objects)
];

const courseDiscussion = [
  {
    key: 1,
    title: "Depiction in foreign language films",
    author1: "Heather Reyes",
    date1: "10 Nov 2014",
    author2: "Jeffrey Sanders",
    date2: "16 Feb 2017",
    count: 5,
  },
  {
    key: 2,
    title: `Depiction in foreign language films`,
    author1Img: "/assets/img/misc/2.png",
    author2Img: "/assets/img/misc/2.png",
    author1: `Heather Reyes`,
    date1: `10 Nov 2014`,
    author2: `Jeffrey Sanders`,
    date2: `16 Feb 2017`,
    count: 5,
  },
  // ... (other discussion objects)
];

const grades = [
  { id: 1, name: "Jenny Wilson", email: "alitfn@example.com", avatar: "/assets/img/avatars/small/1.png" },
  {
    id: 2,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  {
    id: 7,
    name: "Jenny Wilson",
    email: "alitfn@example.com",
    avatar: "/assets/img/avatars/small/1.png",
  },
  // ... (other grade objects)
];

const messageList = [
  { id: 1, name: "Darlene Robertson", title: "Head of Development", avatar: "/assets/img/avatars/small/1.png", time: "35 mins" },
  {
    id: 2,
    name: "Jane Cooper",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/2.png",
    time: "35 mins",
    notificationCount: 5,
  },
  {
    id: 3,
    name: "Arlene McCoy",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/3.png",
    time: "35 mins",
    notificationCount: 2,
  },
  {
    id: 4,
    name: "Albert Flores",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/4.png",
    time: "35 mins",
  },
  {
    id: 5,
    name: "Cameron Williamson",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/5.png",
    time: "35 mins",
    notificationCount: 3,
  },
  {
    id: 6,
    name: "Kristin Watson",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/6.png",
    time: "35 mins",
  },
  {
    id: 7,
    name: "Annette Black",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/7.png",
    time: "35 mins",
  },
  {
    id: 8,
    name: "Jacob Jones",
    title: "Head of Development",
    avatar: "/assets/img/avatars/small/8.png",
    time: "35 mins",
  },// ... (other message objects)
];

const participants = [
  { id: 1, name: "Heather Reyes", date: "10 Nov 2014", role: "Student", team: "Team South", duration: "1 year 31 days", imgSrc: "/assets/img/misc/2.png" },
  {
    id: 2,
    name: "John Doe",
    date: "15 Jan 2015",
    role: "Teacher",
    team: "Team North",
    duration: "2 years 15 days",
    imgSrc: "/assets/img/misc/2.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    date: "22 Mar 2016",
    role: "Administrator",
    team: "Team East",
    duration: "3 years 281 days",
    imgSrc: "/assets/img/misc/2.png",
  },
  {
    id: 4,
    name: "David Johnson",
    date: "5 Jul 2017",
    role: "Student",
    team: "Team West",
    duration: "4 years 2 days",
    imgSrc: "/assets/img/misc/2.png",
  },
  {
    id: 5,
    name: "Emily Davis",
    date: "12 Sep 2018",
    role: "Teacher",
    team: "Team South",
    duration: "5 years 298 days",
    imgSrc: "/assets/img/misc/2.png",
  },
  // ... (other participant objects)
];

// Components
const StateCard = ({ state }) => (
  <div className="state-card">
    <i className={state.iconClass}></i>
    <h3>{state.title}</h3>
    <p>{state.value}</p>
    <p>New: {state.new}</p>
  </div>
);

const CourseCard = ({ course }) => (
  <div className="course-card">
    <img src={course.imageSrc} alt={course.title} />
    <h4>{course.title}</h4>
    <p>Rating: {course.rating} ({course.ratingCount} reviews)</p>
    <p>Duration: {course.duration} minutes</p>
    <p>Price: ${course.discountedPrice} (Original: ${course.originalPrice})</p>
  </div>
);

const MediaUploadCard = ({ media }) => (
  <div className="media-upload-card">
    <img src={media.imgSrc} alt={media.uploadLabel} />
    <label>{media.uploadLabel}</label>
    <input type="text" placeholder={media.uploadPlaceholder} />
    <p>{media.description}</p>
  </div>
);

const ActiveUser Card = ({ user }) => (
  <div className="active-user-card">
    <img src={user.image} alt={user.name} />
    <p>{user.name}</p>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <div className="states">
        {states.map(state => <StateCard key={state.id} state={state} />)}
      </div>
      <h2>Courses</h2>
      <div className="courses">
        {coursesData.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
      <h2>Media Upload</h2>
      <div className="media-upload">
        {mediaUpload.map(media => <MediaUploadCard key={media.id} media={media} />)}
      </div>
      <h2>Active Users</h2>
      <div className="active-users">
        {activeUsers.map(user => <ActiveUser Card key={user.id} user={user} />)}
      </div>
      <h2>Timeline</h2>
      <div className="timeline">
        {timeline.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.date}: {item.title}</p>
          </div>
        ))}
      </div>
      <h2>Course Discussions</h2>
      <div className="course-discussions">
        {courseDiscussion.map(discussion => (
          <div key={discussion.key}>
            <h4>{discussion.title}</h4>
            <p>{discussion.author1} ({discussion.date1})</p>
            <p>{discussion.author2} ({discussion.date2})</p>
            <p>Comments: {discussion.count}</p>
          </div>
        ))}
      </div>
      <h2>Grades</h2>
      <div className="grades">
        {grades.map(grade => (
          <div key={grade.id}>
            <img src={grade.avatar} alt={grade.name} />
            <p>{grade.name} - {grade.email}</p>
          </div>
        ))}
      </div>
      <h2>Messages</h2>
      <div className="messages">
        {messageList.map(message => (
          <div key={message.id}>
            <img src={message.avatar} alt={message.name} />
            <p>{message.name} - {message.title} ({message.time})</p>
          </div>
        ))}
      </div>
      <h2>Participants</h2>
      <div className="participants">
        {participants.map(participant => (
          <div key={participant.id}>
            <img src={participant.imgSrc} alt={participant.name} />
            <p>{participant.name} - {participant.role} ({participant.team})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
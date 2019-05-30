const menuList = [
    {
        title:"首页",
        icon:"home",
        path: '/home'
    },
    {
        title:"信息",
        path: '/information',
        icon:"home"
    },
    {
        title:"学生管理",
        path:'/student',
        icon:"appstore",
        children:[
            {
                title:"添加学生",
                path:'/student/addStudent'
            },
            {
                title:"学生列表",
                path:'/student/studentList'
            },
            {
                title:"学生成绩",
                path:'/student/studentMarks'
            }
        ]
    },
    {
        title:"教师管理",
        path: '/teacher',
        icon:"appstore"
    }
]

export default menuList;
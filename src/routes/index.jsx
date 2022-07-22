import Home from '../pages/Home'
import Following from '../pages/Following'
import Upload from '../pages/Upload'

//Public routes
export const publicRoutes = [
    
        { path:'/',component: Home},
        { path:'/following',component: Following},
        { path:'/upload',component: Upload,layout:null},
   
]
export const privateRoutes = []
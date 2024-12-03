import { useAuthStore } from "@/store/authStore"
const DashboardPage = () => {
  const { user, isCheckingAuth } = useAuthStore();
 console.log(user)
  if(isCheckingAuth) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome {user.name}!</p>
      <p>Your email is {user.email}!</p>
    </div>
  )
}

export default DashboardPage
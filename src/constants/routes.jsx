import CalendarPage from "@/pages/calendar";
import CoursesPage from "@/pages/courses";
import HomePage from "@/pages/home";

export const routes = [
  {
    id: 0,
    components: <HomePage />,
    path: "/",
  },
  {
    id: 1,
    components: <CoursesPage />,
    path: "/courses",
  },
  {
    id: 2,
    components: <CalendarPage />,
    path: "/calendar",
  },
];

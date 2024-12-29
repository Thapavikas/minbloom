import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Successfully logged out.");
      navigate("/login");
    }
  }, [isSuccess, data, navigate]);

  return (
    <header className="h-16 dark:bg-[#1a202c] bg-white border-b dark:border-gray-700 border-gray-200 fixed top-0 left-0 right-0 z-10 shadow-sm">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center px-6 h-full">
        <div className="flex items-center gap-3">
          <School size={28} />
          <Link to="/" className="font-bold text-2xl tracking-wide">
            Mindbloom
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user.photoUrl || "https://via.placeholder.com/150"}
                    alt="User Avatar"
                  />
                  <AvatarFallback>
                    {user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-semibold">
                  Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="/my-learning" className="hover:text-blue-600">
                      My Learning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="hover:text-blue-600">
                      Edit Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {user.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/admin/dashboard" className="hover:text-blue-600">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Log In
              </Button>
              <Button onClick={() => navigate("/signup")}>Sign Up</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <Link to="/" className="font-bold text-2xl">
          Mindbloom
        </Link>
        <MobileNavbar user={user} />
      </div>
    </header>
  );
};

export default Navbar;

const MobileNavbar = ({ user }) => {
  const navigate = useNavigate();
  const logoutHandler = () => navigate("/login");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="rounded-full hover:bg-gray-100">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col px-4 py-6">
        <SheetHeader className="flex items-center justify-between mb-4">
          <SheetTitle className="text-xl font-semibold">
            <Link to="/">Mindbloom</Link>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator />
        <nav className="flex flex-col space-y-4 mt-4">
          <Link to="/my-learning" className="text-lg hover:text-blue-600">
            My Learning
          </Link>
          <Link to="/profile" className="text-lg hover:text-blue-600">
            Edit Profile
          </Link>
          {user ? (
            <button
              className="text-lg text-red-500 hover:text-red-700"
              onClick={logoutHandler}
            >
              Log Out
            </button>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
              <Button className="w-full" onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </>
          )}
          {user?.role === "instructor" && (
            <Link to="/admin/dashboard" className="text-lg hover:text-blue-600">
              Dashboard
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

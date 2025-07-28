import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Twitter, Github, Mail, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Logging in with:", { email, password });
      setLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-crop-green/70 to-amber-100 p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border border-muted rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-crop-green">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Sign in to your Yield Path Finder account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-sm text-right">
              <Link to="/forgot-password" className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              <LogIn className="mr-2 h-5 w-5" />
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="my-6 border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or sign in with</p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-sky-100"
                onClick={() => handleSocialLogin("Email")}
              >
                <Mail className="w-5 h-5 text-primary" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-sky-100"
                onClick={() => handleSocialLogin("Twitter")}
              >
                <Twitter className="w-5 h-5 text-sky-500" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-slate-100"
                onClick={() => handleSocialLogin("GitHub")}
              >
                <Github className="w-5 h-5 text-gray-900" />
              </Button>
            </div>
          </div>

          <div className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

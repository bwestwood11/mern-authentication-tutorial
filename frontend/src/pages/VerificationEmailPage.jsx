import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast"
export function VerificationEmailPage() {
  const [value, setValue] = useState("");
  const { verifyEmail, isLoading, error, user } = useAuthStore();
  console.log("user", user);
  const { toast } = useToast();

  const handleSubmit = async () => {
     await verifyEmail(value);
     if(!error && !isLoading) {
        toast({
            title: "Email Verified",
            description: "Your email has been verified successfully", 
        })
    }
  };

  return (
    <div className="space-y-2 flex flex-col w-full mx-auto justify-center">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="mx-auto">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your verification email code.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
      <Button onClick={handleSubmit}>Verify Email Now</Button>
    </div>
  )
}

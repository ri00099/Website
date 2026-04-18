import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import type { InquiryInput } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function InquiryForm() {
  const { toast } = useToast();
  const form = useForm<InquiryInput>({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useCreateInquiry();

  function onSubmit(data: InquiryInput) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Success!",
          description: "Your inquiry has been submitted to info@bme.in. We'll get back to you soon.",
          duration: 5000,
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: "Failed to submit your inquiry. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    });
  }

  const isSubmitting = mutation.isPending;
  const isSuccess = mutation.isSuccess;

  return (
    <Card className="shadow-xl border-t-4 border-t-primary bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Get in Touch</CardTitle>
        <CardDescription>
          Have questions about membership, pricing, or our services? Drop us a line and we'll respond to info@bme.in
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess && !mutation.isPending ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">Your inquiry has been successfully submitted. Our team at info@bme.in will review and respond shortly.</p>
            <Button 
              onClick={() => {
                form.reset();
                mutation.reset();
              }}
              variant="outline"
              className="rounded-full px-8"
            >
              Send Another Inquiry
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        className="bg-muted/50 border-primary/20 focus:border-primary focus:ring-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-muted/50 border-primary/20 focus:border-primary focus:ring-primary"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you? Tell us about your inquiry..." 
                        className="min-h-[140px] bg-muted/50 resize-none border-primary/20 focus:border-primary focus:ring-primary" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-full font-semibold text-base py-6 shadow-lg hover:shadow-xl transition-all gap-2"
                  disabled={isSubmitting}
                  data-testid="button-submit-inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin">⏳</div>
                      Submitting to info@bme.in...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center pt-2">
                Your information will be sent to info@bme.in for processing
              </p>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}

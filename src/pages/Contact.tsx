
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MessageSquare, 
  Mail, 
  Facebook, 
  Instagram, 
  Clock,
  Phone,
  Check
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "Subscription Issue",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us! We'll get back to you shortly.",
        variant: "default",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "Subscription Issue",
          message: ""
        });
        setSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16" style={{ paddingTop:'7rem'}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Contact <span className="text-iptv-red">Us</span></h1>
          <p className="text-gray-400 mb-12">Get in touch with our support team</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 backdrop-blur-md pricing-card-pattern card-glow">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-iptv-red mr-2" />
                <h3 className="text-lg font-semibold text-white">Email Support</h3>
              </div>
              <p className="text-gray-400 mb-4">
                For general inquiries and support
              </p>
              <a href="mailto:support@iptvplus.us" className="text-iptv-red hover:underline">
                support@iptvplus.us
              </a>
            </div>
            
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 backdrop-blur-md pricing-card-pattern card-glow">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-iptv-red mr-2" />
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Our team is available to help you
              </p>
              <p className="font-semibold text-white">24/7 Customer Support</p>
            </div>

            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 backdrop-blur-md pricing-card-pattern card-glow">
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-iptv-red mr-2" />
                <h3 className="text-lg font-semibold text-white">Phone Support</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Call us for immediate assistance
              </p>
              <a 
                href="https://wa.me/212716075809" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp Support
              </a>
            </div>
            
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 backdrop-blur-md pricing-card-pattern card-glow">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-5 h-5 text-iptv-red mr-2" />
                <h3 className="text-lg font-semibold text-white">Social Media</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Connect with us on social platforms
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-iptv-red transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-iptv-red transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-[10px] p-8 shadow-[0_8px_32px_rgba(255,0,0,0.35)] max-w-[600px] mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {success ? (
              <div className="bg-green-950/50 border border-green-500 rounded-lg p-6 mb-6 animate-fade-in">
                <div className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-lg font-semibold text-white">Message Sent!</h3>
                </div>
                <p className="text-gray-400 mt-2">
                  Thank you for contacting us! We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name <span className="text-iptv-red">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-black/50 border-gray-800 text-white"
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email <span className="text-iptv-red">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-black/50 border-gray-800 text-white"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject <span className="text-iptv-red">*</span>
                  </Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={handleSubjectChange}
                  >
                    <SelectTrigger className="bg-black/50 border-gray-800 text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 text-white border-gray-800">
                      <SelectItem value="Subscription Issue">Subscription Issue</SelectItem>
                      <SelectItem value="Technical Support">Technical Support</SelectItem>
                      <SelectItem value="Billing">Billing</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message <span className="text-iptv-red">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message (minimum 20 characters)"
                    className="bg-black/50 border-gray-800 text-white min-h-[150px]"
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-iptv-red hover:bg-iptv-red/90 transition-all duration-300"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

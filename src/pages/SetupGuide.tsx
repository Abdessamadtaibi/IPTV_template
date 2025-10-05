
import { motion } from "framer-motion";
import { Settings, Download } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const DeviceGuides = [
  {
    id: "smart-tv",
    label: "Smart TVs",
    content: [
      {
        device: "Samsung Smart TV",
        steps: [
          "Turn on your Samsung Smart TV and connect it to the internet.",
          "Navigate to the Apps store on your TV.",
          "Search for 'SS IPTV' or 'Smart IPTV' application.",
          "Download and install the application.",
          "Launch the application and note the MAC address displayed.",
          "Visit our portal at 'portal.iptvplus.net' and enter your MAC address.",
          "Select your subscription package.",
          "Once activated, return to your TV and refresh the application.",
          "Your channels should now be available to stream."
        ]
      },
      {
        device: "LG Smart TV",
        steps: [
          "Turn on your LG Smart TV and ensure it's connected to the internet.",
          "Press the Home button on your remote.",
          "Navigate to the LG Content Store.",
          "Search for 'Smart IPTV' or 'IPTV Smarters' application.",
          "Download and install the application.",
          "Open the app and note the device ID displayed.",
          "Visit our customer portal and register your device ID.",
          "Choose your subscription plan and complete payment.",
          "Return to the app on your TV and refresh/reload the application.",
          "Your channels will now be available for streaming."
        ]
      }
    ]
  },
  {
    id: "android-tv",
    label: "Android TV / Boxes",
    content: [
      {
        device: "Android TV",
        steps: [
          "Ensure your Android TV is connected to the internet.",
          "Navigate to the Google Play Store on your device.",
          "Search for 'IPTV Smarters Pro' or 'TiviMate' application.",
          "Download and install the application of your choice.",
          "Open the installed application.",
          "Select 'Add New Playlist' or 'Add Subscription'.",
          "Enter your IPTV credentials (provided after purchase):",
          "- URL/Host: play.iptvplus.net",
          "- Username: Your registered email",
          "- Password: Your account password",
          "Save the settings and enjoy your channels."
        ]
      },
      {
        device: "Android Box",
        steps: [
          "Power on your Android Box and connect to Wi-Fi.",
          "Open the Google Play Store app.",
          "Search for 'IPTV Smarters Pro' or 'Perfect Player'.",
          "Install your preferred IPTV application.",
          "Launch the application and select 'Add New Playlist'.",
          "Choose 'URL' as the source type.",
          "Enter the M3U URL provided in your confirmation email.",
          "Alternatively, you can use XC login method with:",
          "- Server URL: http://watch.iptvplus.net",
          "- Username: Your account username",
          "- Password: Your account password",
          "Click 'Add' or 'Save' to load your subscription.",
          "The app will load and display your available channels."
        ]
      }
    ]
  },
  {
    id: "firestick",
    label: "Firestick",
    content: [
      {
        device: "Amazon Firestick",
        steps: [
          "Turn on your Amazon Firestick and navigate to the home screen.",
          "Go to 'Settings' > 'My Fire TV' > 'Developer Options'.",
          "Enable 'Apps from Unknown Sources' and 'ADB Debugging'.",
          "Return to the home screen and search for 'Downloader' app.",
          "Install the Downloader app from the Amazon App Store.",
          "Open Downloader and enter the URL: 'iptvplus.net/firestick'",
          "Download and install the IPTVPlus app.",
          "Open the installed app and log in with your credentials.",
          "Your channels will load automatically after successful login."
        ]
      }
    ]
  },
  {
    id: "ios-android",
    label: "Mobile Apps",
    content: [
      {
        device: "iOS (iPhone/iPad)",
        steps: [
          "Open the App Store on your iOS device.",
          "Search for 'IPTV Smarters Pro' or 'GSE Smart IPTV'.",
          "Download and install the application.",
          "Open the app and select 'Add New Playlist'.",
          "You can add your subscription using one of two methods:",
          "- M3U URL: Enter the playlist URL from your welcome email",
          "- Manual Configuration: Enter the server address, username, and password",
          "Tap 'Add' or 'Save' to connect your subscription.",
          "The app will load your channels and VOD content."
        ]
      },
      {
        device: "Android Mobile",
        steps: [
          "Open the Google Play Store on your Android device.",
          "Search for 'IPTV Smarters Pro'.",
          "Install the application on your device.",
          "Launch the app and tap 'Login'.",
          "Select 'URL' as your login method.",
          "Enter the following details:",
          "- Portal URL: http://watch.iptvplus.net",
          "- Username: Your account username",
          "- Password: Your account password",
          "Tap 'Login' to access your subscription.",
          "Navigate through Live TV, Movies, or Series sections to start streaming."
        ]
      }
    ]
  },
  {
    id: "web-player",
    label: "Web Player",
    content: [
      {
        device: "Web Browser",
        steps: [
          "Open your preferred web browser (Chrome, Firefox, Edge, or Safari).",
          "Visit our web player at 'watch.iptvplus.net'.",
          "Enter your username and password.",
          "Click 'Login' to access your subscription.",
          "Navigate through the available categories (Live TV, Movies, Series).",
          "Click on any content to begin streaming directly in your browser.",
          "Use the player controls to adjust volume, change quality, or enable fullscreen.",
          "Note: For optimal performance, we recommend using Google Chrome or Microsoft Edge."
        ]
      }
    ]
  }
];

const SetupGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 container mx-auto px-4 py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Settings className="h-8 w-8 text-iptv-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Setup Guide</h1>
          </div>
          
          <p className="text-iptv-gray text-lg mb-12">
            Follow these simple step-by-step instructions to set up IPTV on your preferred device.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-xl mb-12">
            <div className="bg-black border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Select Your Device</h2>
              
              <Tabs defaultValue="smart-tv" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                  {DeviceGuides.map((guide) => (
                    <TabsTrigger 
                      key={guide.id} 
                      value={guide.id}
                      className="data-[state=active]:bg-iptv-red data-[state=active]:text-white"
                    >
                      {guide.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {DeviceGuides.map((guide) => (
                  <TabsContent key={guide.id} value={guide.id} className="space-y-8">
                    {guide.content.map((deviceContent, index) => (
                      <Card key={index} className="bg-gray-900 border-gray-800">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-bold mb-4 text-iptv-red">{deviceContent.device}</h3>
                          <ScrollArea className="h-[400px] pr-4">
                            <ol className="list-decimal pl-5 space-y-5">
                              {deviceContent.steps.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-iptv-gray">
                                  <span className="text-white">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <Button className="bg-iptv-red hover:bg-iptv-red/80 gap-2 text-white py-6 px-8 w-full md:w-auto">
              <Download size={20} />
              Download PDF Guide
            </Button>
            
            <Button variant="outline" className="border-iptv-red text-iptv-red hover:bg-iptv-red hover:text-white w-full md:w-auto py-6 px-8">
              Contact Support
            </Button>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default SetupGuide;

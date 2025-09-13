import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: 'founders' | 'waitlist';
  name?: string;
  email?: string;
  org?: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, name, email, org, notes }: ContactEmailRequest = await req.json();

    let subject: string;
    let html: string;
    const recipients = ["sanjalijha25@gmail.com", "shrey1.baid@gmail.com"];

    if (type === 'founders') {
      subject = "Contact Request from Stanza Health Website";
      html = `
        <h2>Someone wants to contact the founders!</h2>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p>Please reach out to discuss Stanza Health opportunities.</p>
      `;
    } else {
      subject = "New Waitlist Signup - Stanza Health";
      html = `
        <h2>New Waitlist Signup!</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Organization:</strong> ${org || 'Not provided'}</p>
        <p><strong>Notes:</strong> ${notes || 'None'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Stanza Health <onboarding@resend.dev>",
      to: recipients,
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
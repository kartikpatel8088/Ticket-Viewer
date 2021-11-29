require 'uri'
require 'net/http'


class Api::V1::TicketController < ApplicationController
	def show
		url = URI("https://zccstudentskartik.zendesk.com/api/v2/tickets/"+ params[:id])

	    https = Net::HTTP.new(url.host, url.port)
	    https.use_ssl = true

	    request = Net::HTTP::Get.new(url)
	    request["Authorization"] = "Basic a2FydGlrcGF0ZWw4MDg4QGdtYWlsLmNvbTpaZW5kZXNrY2M3OTY5"
	    request["Cookie"] = "__cfruid=b2dafc2d5388e2f0fc17c45bca81328691a033b9-1637386658; __cfruid=c5599573bd043ca80cfaa0bff4603060dd106aa2-1637660907; _zendesk_session=BAh7C0kiD3Nlc3Npb25faWQGOgZFVEkiJTZhZTYwYjg3MDg0NjRjNWNmNTRmOGU4YWYwOTYwOTI0BjsAVEkiDGFjY291bnQGOwBGaQPEr7JJIgpyb3V0ZQY7AEZpA7kpVUkiDmlzX21vYmlsZQY7AFRGSSITd2FyZGVuLm1lc3NhZ2UGOwBUewBJIhBfY3NyZl90b2tlbgY7AEZJIjF0NWI0dlEwckQ1OC9jSmh5TnM4aXdHRVZndFVwT095Y0M4ZE1ua3RCTmFVPQY7AEY%3D--2ecc1f90e45b22ee76a702b1c4244b35cacf1471; _zendesk_shared_session=-V2dlYVljM0JoQVQ2K0N5T2djVFQzdlBWZ1h0V0NKbXpiS2Y0RWliakZOWEVSb2JqV1dQK0s0bTBkUnJ1RDJEKzZFWUJFcGxINXptbmxWYVl5alFTM2E2a0F4TDJJV1FldnVjMzNGeEppNHVxQ3R0d2FhbGx2K2U1VmhBcVc5cDJJVDdkdlpHT2gxSnh5WUZPTjBkMEJBPT0tLWsvNWRaSkdBYlVQQjJ3RWt1eXRQQUE9PQ%3D%3D--474ea5ae311e7649cd909364b60b1693a54537fd"

	    response = https.request(request)
	    # puts JSON.parse(response.read_body)
	    
	   
	    render json: JSON.parse(response.read_body)
	end
end

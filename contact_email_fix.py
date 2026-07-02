with open('contact.html') as f:
    content = f.read()

content = content.replace(
    '''<p><strong class="text-brandNavy">Email:</strong> terrydenagencies@gmail.com</p>''',
    '''<p><strong class="text-brandNavy">Email:</strong> terrydenagencies@gmail.com</p>
      <p><strong class="text-brandNavy">Webmail:</strong> info@terrydenagencies.com</p>'''
)

with open('contact.html', 'w') as f:
    f.write(content)

print("contact.html updated ✅")

config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address:              'smtp.gmail.com',
  port:                 587,
  domain:               'gmail.com',
  user_name:            '<chestertjreview>',
  password:             '<temppass99>',
  authentication:       'plain',
  enable_starttls_auto: true,
  open_timeout:         5,
  read_timeout:         5 }

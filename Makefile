.DEFAULT_GOAL := help

PROJECT_NAME := palza_market_fe
AWS_ACCOUNT_ID := master-hdh
AWS_IAM_USERNAME := ali
AWS_IAM_PASSWORD := Jbany159!
AWS_ACCESS_KEY_ID := AKIAW7OMABNVE2ZGIP6J
AWS_SECRET_ACCESS_KEY := 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
AWS_S3_PUBLIC_BUCKET_NAME := palza-market-main
AWS_S3_PUBLIC_BUCKET_POLICY := "{\
  \"Version\": \"2012-10-17\",\
  \"Statement\": [\
      {\
          \"Sid\": \"PublicReadGetObject\",\
          \"Effect\": \"Allow\",\
          \"Principal\": \"*\",\
          \"Action\": \"s3:GetObject\",\
          \"Resource\": \"arn:aws:s3:::$($(env))/*\"\
      }\
  ]\
}"

s3.config:
	@aws s3api put-public-access-block \
    --bucket $(AWS_S3_PUBLIC_BUCKET_NAME) \
    --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
	@aws s3api put-bucket-policy --bucket $(AWS_S3_PUBLIC_BUCKET_NAME) --policy $(AWS_S3_PUBLIC_BUCKET_POLICY)
	@aws s3 website "s3://$(AWS_S3_PUBLIC_BUCKET_NAME)" --index-document index.html --error-document index.html

s3.sync:
	@aws s3 sync "./build/" "s3://$(AWS_S3_PUBLIC_BUCKET_NAME)/" --cache-control max-age=0,public

s3.url:
	@echo "http://$(AWS_S3_PUBLIC_BUCKET_NAME).s3-website.ap-northeast-2.amazonaws.com/"

js.format:
	@npm run format

js.setup:
	@npm install
	@npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
	@npm install @craco/craco

js.run:
	@npm run start

find:
	@lsof -i tcp:3000
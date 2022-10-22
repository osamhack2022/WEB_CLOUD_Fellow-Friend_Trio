terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "2.70.0"
    }
  }

  # backend "remote" {
  # 	hostname = "app.terraform.io" 
  # 	organization = "fellow_friend" 

  # 	workspaces {
  # 		name = "tf-cloud-backend"
  # 	}
  # }
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}

locals {
  vpc_name = "fellow_friend_vpc"
}


# aws vpc, subnet,internet gateway, ecs resource 작성 예정 